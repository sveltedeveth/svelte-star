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
export type GiArmadilloProps = typeof __propDef.props;
export type GiArmadilloEvents = typeof __propDef.events;
export type GiArmadilloSlots = typeof __propDef.slots;
export default class GiArmadillo extends SvelteComponentTyped<GiArmadilloProps, GiArmadilloEvents, GiArmadilloSlots> {
}
export {};
