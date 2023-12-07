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
export type GiMegaphoneProps = typeof __propDef.props;
export type GiMegaphoneEvents = typeof __propDef.events;
export type GiMegaphoneSlots = typeof __propDef.slots;
export default class GiMegaphone extends SvelteComponentTyped<GiMegaphoneProps, GiMegaphoneEvents, GiMegaphoneSlots> {
}
export {};
