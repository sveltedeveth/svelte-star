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
export type FaTelegramProps = typeof __propDef.props;
export type FaTelegramEvents = typeof __propDef.events;
export type FaTelegramSlots = typeof __propDef.slots;
export default class FaTelegram extends SvelteComponentTyped<FaTelegramProps, FaTelegramEvents, FaTelegramSlots> {
}
export {};
