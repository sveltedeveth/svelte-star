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
export type GiAerosolProps = typeof __propDef.props;
export type GiAerosolEvents = typeof __propDef.events;
export type GiAerosolSlots = typeof __propDef.slots;
export default class GiAerosol extends SvelteComponentTyped<GiAerosolProps, GiAerosolEvents, GiAerosolSlots> {
}
export {};
