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
export type FaNimblrProps = typeof __propDef.props;
export type FaNimblrEvents = typeof __propDef.events;
export type FaNimblrSlots = typeof __propDef.slots;
export default class FaNimblr extends SvelteComponentTyped<FaNimblrProps, FaNimblrEvents, FaNimblrSlots> {
}
export {};
