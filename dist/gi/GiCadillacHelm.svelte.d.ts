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
export type GiCadillacHelmProps = typeof __propDef.props;
export type GiCadillacHelmEvents = typeof __propDef.events;
export type GiCadillacHelmSlots = typeof __propDef.slots;
export default class GiCadillacHelm extends SvelteComponentTyped<GiCadillacHelmProps, GiCadillacHelmEvents, GiCadillacHelmSlots> {
}
export {};
