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
export type FaPhoneSquareProps = typeof __propDef.props;
export type FaPhoneSquareEvents = typeof __propDef.events;
export type FaPhoneSquareSlots = typeof __propDef.slots;
export default class FaPhoneSquare extends SvelteComponentTyped<FaPhoneSquareProps, FaPhoneSquareEvents, FaPhoneSquareSlots> {
}
export {};
