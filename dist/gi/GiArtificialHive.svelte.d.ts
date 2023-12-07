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
export type GiArtificialHiveProps = typeof __propDef.props;
export type GiArtificialHiveEvents = typeof __propDef.events;
export type GiArtificialHiveSlots = typeof __propDef.slots;
export default class GiArtificialHive extends SvelteComponentTyped<GiArtificialHiveProps, GiArtificialHiveEvents, GiArtificialHiveSlots> {
}
export {};
