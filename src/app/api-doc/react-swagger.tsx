'use client';

import 'swagger-ui-react/swagger-ui.css';

import React from 'react';
import SwaggerUI from 'swagger-ui-react';

type Props = {
  spec: Record<string, any>,
};

function ReactSwagger({ spec }: Props) {
  return <SwaggerUI spec={spec} />;
}

export default ReactSwagger;