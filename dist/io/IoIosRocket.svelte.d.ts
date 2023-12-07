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
export type IoIosRocketProps = typeof __propDef.props;
export type IoIosRocketEvents = typeof __propDef.events;
export type IoIosRocketSlots = typeof __propDef.slots;
export default class IoIosRocket extends SvelteComponentTyped<IoIosRocketProps, IoIosRocketEvents, IoIosRocketSlots> {
}
export {};
