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
export type GiHydraShotProps = typeof __propDef.props;
export type GiHydraShotEvents = typeof __propDef.events;
export type GiHydraShotSlots = typeof __propDef.slots;
export default class GiHydraShot extends SvelteComponentTyped<GiHydraShotProps, GiHydraShotEvents, GiHydraShotSlots> {
}
export {};
