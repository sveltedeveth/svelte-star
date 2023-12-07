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
export type GiThunderballProps = typeof __propDef.props;
export type GiThunderballEvents = typeof __propDef.events;
export type GiThunderballSlots = typeof __propDef.slots;
export default class GiThunderball extends SvelteComponentTyped<GiThunderballProps, GiThunderballEvents, GiThunderballSlots> {
}
export {};
