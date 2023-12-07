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
export type GiSwirlStringProps = typeof __propDef.props;
export type GiSwirlStringEvents = typeof __propDef.events;
export type GiSwirlStringSlots = typeof __propDef.slots;
export default class GiSwirlString extends SvelteComponentTyped<GiSwirlStringProps, GiSwirlStringEvents, GiSwirlStringSlots> {
}
export {};
