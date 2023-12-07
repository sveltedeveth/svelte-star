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
export type TiThumbsUpProps = typeof __propDef.props;
export type TiThumbsUpEvents = typeof __propDef.events;
export type TiThumbsUpSlots = typeof __propDef.slots;
export default class TiThumbsUp extends SvelteComponentTyped<TiThumbsUpProps, TiThumbsUpEvents, TiThumbsUpSlots> {
}
export {};
