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
export type GiSpadeSkullProps = typeof __propDef.props;
export type GiSpadeSkullEvents = typeof __propDef.events;
export type GiSpadeSkullSlots = typeof __propDef.slots;
export default class GiSpadeSkull extends SvelteComponentTyped<GiSpadeSkullProps, GiSpadeSkullEvents, GiSpadeSkullSlots> {
}
export {};
