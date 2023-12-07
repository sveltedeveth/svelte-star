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
export type GiThunderSkullProps = typeof __propDef.props;
export type GiThunderSkullEvents = typeof __propDef.events;
export type GiThunderSkullSlots = typeof __propDef.slots;
export default class GiThunderSkull extends SvelteComponentTyped<GiThunderSkullProps, GiThunderSkullEvents, GiThunderSkullSlots> {
}
export {};
