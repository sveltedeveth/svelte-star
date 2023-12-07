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
export type GiEntangledTyphoonProps = typeof __propDef.props;
export type GiEntangledTyphoonEvents = typeof __propDef.events;
export type GiEntangledTyphoonSlots = typeof __propDef.slots;
export default class GiEntangledTyphoon extends SvelteComponentTyped<GiEntangledTyphoonProps, GiEntangledTyphoonEvents, GiEntangledTyphoonSlots> {
}
export {};
