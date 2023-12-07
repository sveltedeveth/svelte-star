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
export type GiAcousticMegaphoneProps = typeof __propDef.props;
export type GiAcousticMegaphoneEvents = typeof __propDef.events;
export type GiAcousticMegaphoneSlots = typeof __propDef.slots;
export default class GiAcousticMegaphone extends SvelteComponentTyped<GiAcousticMegaphoneProps, GiAcousticMegaphoneEvents, GiAcousticMegaphoneSlots> {
}
export {};
