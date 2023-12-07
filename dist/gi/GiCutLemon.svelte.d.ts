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
export type GiCutLemonProps = typeof __propDef.props;
export type GiCutLemonEvents = typeof __propDef.events;
export type GiCutLemonSlots = typeof __propDef.slots;
export default class GiCutLemon extends SvelteComponentTyped<GiCutLemonProps, GiCutLemonEvents, GiCutLemonSlots> {
}
export {};
