# Dockerfile pour la production test
FROM python:3.9 as production
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
RUN mkdir /lms_mns
RUN useradd -m app
USER app
WORKDIR /code
COPY requirements/base.txt /lms_mns/requirements/
COPY --chown=app:app requirements/base.txt /lms_mns/requirements/
ENV PATH="/home/app/.local/bin:${PATH}"
RUN python3 -m pip install --upgrade pip
RUN pip install -r requirements/base.txt
COPY scripts/prod/start_prod.sh \
    scripts/dev/start_ci.sh \
    scripts/dev/start_asgi.sh \
    /
ADD . /lms_mns/
ADD --chown=app:app . /lms_mns/
