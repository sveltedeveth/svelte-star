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
export type GiMightyForceProps = typeof __propDef.props;
export type GiMightyForceEvents = typeof __propDef.events;
export type GiMightyForceSlots = typeof __propDef.slots;
export default class GiMightyForce extends SvelteComponentTyped<GiMightyForceProps, GiMightyForceEvents, GiMightyForceSlots> {
}
export {};
