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
export type GiVineWhipProps = typeof __propDef.props;
export type GiVineWhipEvents = typeof __propDef.events;
export type GiVineWhipSlots = typeof __propDef.slots;
export default class GiVineWhip extends SvelteComponentTyped<GiVineWhipProps, GiVineWhipEvents, GiVineWhipSlots> {
}
export {};
