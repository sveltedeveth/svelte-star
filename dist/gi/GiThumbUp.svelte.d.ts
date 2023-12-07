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
export type GiThumbUpProps = typeof __propDef.props;
export type GiThumbUpEvents = typeof __propDef.events;
export type GiThumbUpSlots = typeof __propDef.slots;
export default class GiThumbUp extends SvelteComponentTyped<GiThumbUpProps, GiThumbUpEvents, GiThumbUpSlots> {
}
export {};
