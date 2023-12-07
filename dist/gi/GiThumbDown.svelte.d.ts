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
export type GiThumbDownProps = typeof __propDef.props;
export type GiThumbDownEvents = typeof __propDef.events;
export type GiThumbDownSlots = typeof __propDef.slots;
export default class GiThumbDown extends SvelteComponentTyped<GiThumbDownProps, GiThumbDownEvents, GiThumbDownSlots> {
}
export {};
