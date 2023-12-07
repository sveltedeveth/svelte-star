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
export type GiBoxCutterProps = typeof __propDef.props;
export type GiBoxCutterEvents = typeof __propDef.events;
export type GiBoxCutterSlots = typeof __propDef.slots;
export default class GiBoxCutter extends SvelteComponentTyped<GiBoxCutterProps, GiBoxCutterEvents, GiBoxCutterSlots> {
}
export {};
