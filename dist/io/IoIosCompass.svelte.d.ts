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
export type IoIosCompassProps = typeof __propDef.props;
export type IoIosCompassEvents = typeof __propDef.events;
export type IoIosCompassSlots = typeof __propDef.slots;
export default class IoIosCompass extends SvelteComponentTyped<IoIosCompassProps, IoIosCompassEvents, IoIosCompassSlots> {
}
export {};
