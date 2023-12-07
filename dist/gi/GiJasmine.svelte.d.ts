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
export type GiJasmineProps = typeof __propDef.props;
export type GiJasmineEvents = typeof __propDef.events;
export type GiJasmineSlots = typeof __propDef.slots;
export default class GiJasmine extends SvelteComponentTyped<GiJasmineProps, GiJasmineEvents, GiJasmineSlots> {
}
export {};
