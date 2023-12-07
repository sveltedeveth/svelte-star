import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoIosFitnessProps = typeof __propDef.props;
export type IoIosFitnessEvents = typeof __propDef.events;
export type IoIosFitnessSlots = typeof __propDef.slots;
export default class IoIosFitness extends SvelteComponentTyped<IoIosFitnessProps, IoIosFitnessEvents, IoIosFitnessSlots> {
}
export {};
