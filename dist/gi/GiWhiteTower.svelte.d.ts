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
export type GiWhiteTowerProps = typeof __propDef.props;
export type GiWhiteTowerEvents = typeof __propDef.events;
export type GiWhiteTowerSlots = typeof __propDef.slots;
export default class GiWhiteTower extends SvelteComponentTyped<GiWhiteTowerProps, GiWhiteTowerEvents, GiWhiteTowerSlots> {
}
export {};
