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
export type GiPounceProps = typeof __propDef.props;
export type GiPounceEvents = typeof __propDef.events;
export type GiPounceSlots = typeof __propDef.slots;
export default class GiPounce extends SvelteComponentTyped<GiPounceProps, GiPounceEvents, GiPounceSlots> {
}
export {};
