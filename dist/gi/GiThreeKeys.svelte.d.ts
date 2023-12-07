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
export type GiThreeKeysProps = typeof __propDef.props;
export type GiThreeKeysEvents = typeof __propDef.events;
export type GiThreeKeysSlots = typeof __propDef.slots;
export default class GiThreeKeys extends SvelteComponentTyped<GiThreeKeysProps, GiThreeKeysEvents, GiThreeKeysSlots> {
}
export {};
