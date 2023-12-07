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
export type GiLugerProps = typeof __propDef.props;
export type GiLugerEvents = typeof __propDef.events;
export type GiLugerSlots = typeof __propDef.slots;
export default class GiLuger extends SvelteComponentTyped<GiLugerProps, GiLugerEvents, GiLugerSlots> {
}
export {};
