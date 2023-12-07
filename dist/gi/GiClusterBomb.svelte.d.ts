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
export type GiClusterBombProps = typeof __propDef.props;
export type GiClusterBombEvents = typeof __propDef.events;
export type GiClusterBombSlots = typeof __propDef.slots;
export default class GiClusterBomb extends SvelteComponentTyped<GiClusterBombProps, GiClusterBombEvents, GiClusterBombSlots> {
}
export {};
