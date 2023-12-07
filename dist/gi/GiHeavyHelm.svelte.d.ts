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
export type GiHeavyHelmProps = typeof __propDef.props;
export type GiHeavyHelmEvents = typeof __propDef.events;
export type GiHeavyHelmSlots = typeof __propDef.slots;
export default class GiHeavyHelm extends SvelteComponentTyped<GiHeavyHelmProps, GiHeavyHelmEvents, GiHeavyHelmSlots> {
}
export {};
