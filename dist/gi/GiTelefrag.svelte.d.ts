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
export type GiTelefragProps = typeof __propDef.props;
export type GiTelefragEvents = typeof __propDef.events;
export type GiTelefragSlots = typeof __propDef.slots;
export default class GiTelefrag extends SvelteComponentTyped<GiTelefragProps, GiTelefragEvents, GiTelefragSlots> {
}
export {};
