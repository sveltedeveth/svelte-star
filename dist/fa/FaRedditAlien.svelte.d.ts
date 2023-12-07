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
export type FaRedditAlienProps = typeof __propDef.props;
export type FaRedditAlienEvents = typeof __propDef.events;
export type FaRedditAlienSlots = typeof __propDef.slots;
export default class FaRedditAlien extends SvelteComponentTyped<FaRedditAlienProps, FaRedditAlienEvents, FaRedditAlienSlots> {
}
export {};
