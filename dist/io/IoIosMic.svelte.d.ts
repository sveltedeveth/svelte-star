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
export type IoIosMicProps = typeof __propDef.props;
export type IoIosMicEvents = typeof __propDef.events;
export type IoIosMicSlots = typeof __propDef.slots;
export default class IoIosMic extends SvelteComponentTyped<IoIosMicProps, IoIosMicEvents, IoIosMicSlots> {
}
export {};
