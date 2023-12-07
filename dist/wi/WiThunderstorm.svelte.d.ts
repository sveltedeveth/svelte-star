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
export type WiThunderstormProps = typeof __propDef.props;
export type WiThunderstormEvents = typeof __propDef.events;
export type WiThunderstormSlots = typeof __propDef.slots;
export default class WiThunderstorm extends SvelteComponentTyped<WiThunderstormProps, WiThunderstormEvents, WiThunderstormSlots> {
}
export {};
