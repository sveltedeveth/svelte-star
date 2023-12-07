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
export type GiDreadnoughtProps = typeof __propDef.props;
export type GiDreadnoughtEvents = typeof __propDef.events;
export type GiDreadnoughtSlots = typeof __propDef.slots;
export default class GiDreadnought extends SvelteComponentTyped<GiDreadnoughtProps, GiDreadnoughtEvents, GiDreadnoughtSlots> {
}
export {};
