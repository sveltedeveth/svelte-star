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
export type GiThunderBladeProps = typeof __propDef.props;
export type GiThunderBladeEvents = typeof __propDef.events;
export type GiThunderBladeSlots = typeof __propDef.slots;
export default class GiThunderBlade extends SvelteComponentTyped<GiThunderBladeProps, GiThunderBladeEvents, GiThunderBladeSlots> {
}
export {};
