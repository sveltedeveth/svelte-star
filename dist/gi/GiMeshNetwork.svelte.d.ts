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
export type GiMeshNetworkProps = typeof __propDef.props;
export type GiMeshNetworkEvents = typeof __propDef.events;
export type GiMeshNetworkSlots = typeof __propDef.slots;
export default class GiMeshNetwork extends SvelteComponentTyped<GiMeshNetworkProps, GiMeshNetworkEvents, GiMeshNetworkSlots> {
}
export {};
