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
export type Gi3DHammerProps = typeof __propDef.props;
export type Gi3DHammerEvents = typeof __propDef.events;
export type Gi3DHammerSlots = typeof __propDef.slots;
export default class Gi3DHammer extends SvelteComponentTyped<Gi3DHammerProps, Gi3DHammerEvents, Gi3DHammerSlots> {
}
export {};
