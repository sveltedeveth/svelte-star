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
export type FaYandexProps = typeof __propDef.props;
export type FaYandexEvents = typeof __propDef.events;
export type FaYandexSlots = typeof __propDef.slots;
export default class FaYandex extends SvelteComponentTyped<FaYandexProps, FaYandexEvents, FaYandexSlots> {
}
export {};
