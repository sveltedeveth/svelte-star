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
export type FaTumblrSquareProps = typeof __propDef.props;
export type FaTumblrSquareEvents = typeof __propDef.events;
export type FaTumblrSquareSlots = typeof __propDef.slots;
export default class FaTumblrSquare extends SvelteComponentTyped<FaTumblrSquareProps, FaTumblrSquareEvents, FaTumblrSquareSlots> {
}
export {};
