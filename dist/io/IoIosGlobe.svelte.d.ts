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
export type IoIosGlobeProps = typeof __propDef.props;
export type IoIosGlobeEvents = typeof __propDef.events;
export type IoIosGlobeSlots = typeof __propDef.slots;
export default class IoIosGlobe extends SvelteComponentTyped<IoIosGlobeProps, IoIosGlobeEvents, IoIosGlobeSlots> {
}
export {};
