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
export type GiHiveProps = typeof __propDef.props;
export type GiHiveEvents = typeof __propDef.events;
export type GiHiveSlots = typeof __propDef.slots;
export default class GiHive extends SvelteComponentTyped<GiHiveProps, GiHiveEvents, GiHiveSlots> {
}
export {};
