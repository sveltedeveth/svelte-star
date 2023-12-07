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
export type GiAngelWingsProps = typeof __propDef.props;
export type GiAngelWingsEvents = typeof __propDef.events;
export type GiAngelWingsSlots = typeof __propDef.slots;
export default class GiAngelWings extends SvelteComponentTyped<GiAngelWingsProps, GiAngelWingsEvents, GiAngelWingsSlots> {
}
export {};
