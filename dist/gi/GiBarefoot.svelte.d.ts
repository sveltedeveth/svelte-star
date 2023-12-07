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
export type GiBarefootProps = typeof __propDef.props;
export type GiBarefootEvents = typeof __propDef.events;
export type GiBarefootSlots = typeof __propDef.slots;
export default class GiBarefoot extends SvelteComponentTyped<GiBarefootProps, GiBarefootEvents, GiBarefootSlots> {
}
export {};
