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
export type GiLemonProps = typeof __propDef.props;
export type GiLemonEvents = typeof __propDef.events;
export type GiLemonSlots = typeof __propDef.slots;
export default class GiLemon extends SvelteComponentTyped<GiLemonProps, GiLemonEvents, GiLemonSlots> {
}
export {};
