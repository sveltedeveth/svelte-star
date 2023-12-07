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
export type GoMegaphoneProps = typeof __propDef.props;
export type GoMegaphoneEvents = typeof __propDef.events;
export type GoMegaphoneSlots = typeof __propDef.slots;
export default class GoMegaphone extends SvelteComponentTyped<GoMegaphoneProps, GoMegaphoneEvents, GoMegaphoneSlots> {
}
export {};
