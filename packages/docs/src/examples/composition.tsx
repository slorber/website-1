import React from 'react';
import { readFileSync } from 'fs';
import { composition } from '@compiled/website-examples';
import { Example } from '@compiled/website-ui';

export const CompositionObject = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/composition-obj.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/composition-obj.js',
        'utf-8'
      )}>
      <composition.CompositionObject />
    </Example>
  );
};

export const CompositionOrder = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/composition-order.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/composition-order.js',
        'utf-8'
      )}>
      <composition.CompositionOrder />
    </Example>
  );
};

export const CompositionImports = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/composition-imports.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/composition-imports.js',
        'utf-8'
      )}>
      <composition.CompositionImports />
    </Example>
  );
};
