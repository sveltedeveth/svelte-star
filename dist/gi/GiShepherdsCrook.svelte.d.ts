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
export type GiShepherdsCrookProps = typeof __propDef.props;
export type GiShepherdsCrookEvents = typeof __propDef.events;
export type GiShepherdsCrookSlots = typeof __propDef.slots;
export default class GiShepherdsCrook extends SvelteComponentTyped<GiShepherdsCrookProps, GiShepherdsCrookEvents, GiShepherdsCrookSlots> {
}
export {};
