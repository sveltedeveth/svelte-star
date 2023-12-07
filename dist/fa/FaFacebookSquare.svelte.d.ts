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
export type FaFacebookSquareProps = typeof __propDef.props;
export type FaFacebookSquareEvents = typeof __propDef.events;
export type FaFacebookSquareSlots = typeof __propDef.slots;
export default class FaFacebookSquare extends SvelteComponentTyped<FaFacebookSquareProps, FaFacebookSquareEvents, FaFacebookSquareSlots> {
}
export {};
